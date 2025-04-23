'use client';
import React, { useEffect, useRef, useState } from 'react';
import { RcFile } from 'antd/es/upload';
import Link from 'next/link';
import { Controller, DefaultValues, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import {
  Button,
  Card,
  DatePicker,
  Flex,
  Form,
  Input,
  notification, Typography,
  Upload,
  UploadProps,
} from 'antd';

import { setDoc, doc } from '@firebase/firestore';

import useStore from '@/_store';
import { IClosestEvent } from '@/_interfaces';
import { eventsCollection } from '@/_fireBase';
import { getImageUrl, handleDeleteImage, uploadImage } from '@/_utils';

import ClosestEventPreview from '../_components/ClosestEventPreview';
import TagsComponent from '../_components/tagsComponent';
import styles from '../_styles/styles.module.sass';

const { Dragger } = Upload;

export default function ClosestEvent() {
  const { closestEvent } = useStore();
  const form = useForm<IClosestEvent>({
    defaultValues: closestEvent as DefaultValues<IClosestEvent>
  });

  const [formData, setFormData] = useState<IClosestEvent>();
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<RcFile | null>(null);
  const [api, contextHolder] = notification.useNotification();

  const imageRef = useRef<string>(null);

  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    multiple: false,
    listType: 'picture',
    accept: '.png,.jpeg,.jpg',
    onRemove() {
      const imageUrl = getImageUrl(imageRef.current || '');
      setImage(null);

      setFormData((prev) => {
        if (!prev || !imageRef.current) return;

        return {
          ...prev,
          image: imageUrl
        };
      });

      form.setValue('image', imageUrl);
    },
    beforeUpload(newImage) {
      if (!newImage) return false;
      setImage(newImage);
      form.setValue('image', URL.createObjectURL(newImage));
      return false;
    },
  };

  useEffect(() => {
    setFormData(form.getValues());

    if (!imageRef.current) {
      imageRef.current = form.getValues().image;
    }

    form.setValue('image', getImageUrl(imageRef.current));
  }, []);

  useEffect(() => {
    if (!image) return;
    setFormData({
      ...form.getValues(),
      image: URL.createObjectURL(image),
    });
  }, [image]);

  const accept = async () => {
    setLoading(true);
    const data = {
      ...formData,
      image: imageRef.current,
      id: String(Date.now()),
    };

    if (image) {
      if (imageRef.current) {
        await handleDeleteImage(imageRef.current).catch(e => console.log(e.message));
      }

      await uploadImage(image).then(res => {
        data.image = res.data.public_id ;
      });
    }

    Object.entries(data).forEach(([key, value]) => {
      if (!value) {
        // @ts-expect-error null
        data[key as keyof typeof data] = null;
      }
    });

    await setDoc(doc(eventsCollection, 'closestEvent'), data).then(() => {
      api.success({ message: 'Updated successfully.' });
      setLoading(false);
    });
  };

  return (
    <Flex gap={10}>
      {contextHolder}
      <Form
        style={{ width: '30%', height: 'fit-content' }}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onChange={() => setFormData(form.getValues())}
        disabled={loading}
      >
        <Typography.Title level={3} className={styles.title}>
          Info
        </Typography.Title>
        <Controller
          control={form.control}
          rules={{ required: 'Required field' }}
          name="date"
          render={({ field, fieldState }) => (
            <Form.Item
              label="Date"
              required
              help={fieldState.error?.message}
              validateStatus={fieldState.error ? 'error' : undefined}
            >
              <DatePicker
                type="datetime-local"
                showTime
                defaultValue={dayjs(field.value)}
                onChange={(value) => {
                  setFormData({
                    ...form.getValues(),
                    date: value ? value.toISOString() : Date.now().toLocaleString()
                  });

                  form.setValue('date', value?.toISOString());
                }}
              />
            </Form.Item>
          )}
        />
        <Controller
          control={form.control}
          rules={{ required: 'Required field' }}
          name="title"
          render={({ field, fieldState }) => (
            <Form.Item
              label="Title"
              required
              help={fieldState.error?.message}
              validateStatus={fieldState.error ? 'error' : undefined}
            >
              <Input {...field} autoComplete="off" />
            </Form.Item>
          )}
        />
        <Controller
          control={form.control}
          rules={{ required: 'Required field' }}
          name="location"
          render={({ field, fieldState }) => (
            <Form.Item
              label="Location"
              required
              help={fieldState.error?.message}
              validateStatus={fieldState.error ? 'error' : undefined}
            >
              <Input {...field} autoComplete="off" />
            </Form.Item>
          )}
        />
        <Controller
          control={form.control}
          rules={{ required: 'Required field' }}
          name="tags"
          render={({ field, fieldState }) => (
            <Form.Item
              label="Tags"
              required
              help={fieldState.error?.message}
              validateStatus={fieldState.error ? 'error' : undefined}
            >
              <TagsComponent data={field.value || []} accept={(data) => {
                form.setValue('tags', data);
                setFormData(prevState => ({
                  ...prevState as IClosestEvent,
                  tags: data
                }));
              }} />
            </Form.Item>
          )}
        />
        <Controller
          control={form.control}
          rules={{ required: 'Required field' }}
          name="description"
          render={({ field, fieldState }) => (
            <Form.Item
              label="Description"
              required
              help={fieldState.error?.message}
              validateStatus={fieldState.error ? 'error' : undefined}
            >
              <Input.TextArea  {...field} autoComplete="off" disabled={loading}/>
            </Form.Item>
          )}
        />

        <Typography.Title level={3} className={styles.title}>
          Links
        </Typography.Title>

        <Controller
          control={form.control}
          rules={{ required: 'Required field' }}
          name="registrationLink"
          render={({ field, fieldState }) => (
            <Form.Item
              label="Registration Link"
              required
              help={fieldState.error?.message}
              validateStatus={fieldState.error ? 'error' : undefined}
            >
              <Input {...field} autoComplete="off" />
            </Form.Item>
          )}
        />

        <Controller
          control={form.control}
          name="telegram"
          render={({ field }) => (
            <Form.Item
              label="Telegram"
            >
              <Input {...field} autoComplete="off" />
            </Form.Item>
          )}
        />

        <Controller
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <Form.Item
              label="LinkedIn"
            >
              <Input {...field} autoComplete="off" />
            </Form.Item>
          )}
        />

        <Controller
          control={form.control}
          name="meetup"
          render={({ field }) => (
            <Form.Item
              label="Meetup"
            >
              <Input {...field} autoComplete="off" />
            </Form.Item>
          )}
        />

        <Dragger {...props} height={300}>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
        <Flex gap={20} style={{ marginTop: '30px' }}>
          <Button
            type="primary"
            disabled={!form.formState.isValid || loading}
            onClick={accept}
            loading={loading}
          >
            Accept
          </Button>
          <Button
            disabled={loading}
            danger
          >
            <Link href="/back-office/">
              Cancel
            </Link>

          </Button>
        </Flex>
      </Form>
      {formData && (
        <Card style={{
          flex: '1 1 70%',
          height: 'fit-content'
        }}>
          <ClosestEventPreview data={formData} preview/>
        </Card>
      )}
    </Flex>
  );
}
