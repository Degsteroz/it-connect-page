import React from 'react';
import useStore from '@/_store';
import { Card, Empty, Flex, Table } from 'antd';

export default function EventsTable() {
  const { events } = useStore(state => state);

  if (!events?.length) {
    return (
      <Card>
        <Empty description="Events not found" />
      </Card>
    );
  }

  return (
    <Table
      dataSource={events}
      key={'title'}
      pagination={{
        pageSize: 5,
      }}
      columns={[
        {
          key: 'title',
          title: 'Title',
          width: '33%',
          render: (_value, row) => (
            <Flex key={row.title}>
              {row.title}
            </Flex>
          ),
        },
        {
          key: 'date',
          title: 'Date',
          width: '33%',
          render: (_value, row) => (
            <Flex key={row.date}>
              {row.date}
            </Flex>
          ),
        },
        {
          key: '_type',
          title: 'Type',
          filters: [
            { text: 'Meetup', value: 0 },
            { text: 'Network', value: 1 },
          ],
          onFilter: (value, record) => record._type === value,
          render: (_value, row) => (
            <Flex key={row.id}>
              {row._type ? 'Network' : 'Meetup'}
            </Flex>
          ),
        },
      ]} />
  );
}
