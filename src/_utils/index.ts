import crypto from 'crypto';
import axios from 'axios';

export function stringToNumericId(str: string) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

//https://res.cloudinary.com/dtecpsig5/image/upload/v1743957716/it-connect/dima.jpg

export const getImageUrl = (id: string) => {
  return 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/' + id;
};

export async function uploadImage (image: unknown) {
  const cloudName = process.env.CLOUD_NAME;
  const unsignedUploadPreset = process.env.UPLOAD_PRESET as string;

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  const fd = new FormData();

  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('file', image as File);

  return axios.post(
    url,
    fd,
    {
      params: {
        folder: 'it-connect'
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    },
  );
}

const generateSHA1 = (data: string) => {
  const hash = crypto.createHash('sha1');
  hash.update(data);
  return hash.digest('hex');
};

const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

export const handleDeleteImage = async (publicId: string) => {
  const cloudName = process.env.CLOUD_NAME;
  const timestamp = new Date().getTime();
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET as string;
  const signature = generateSHA1(generateSignature(publicId, apiSecret));
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  return await axios.post(url, {
    public_id: publicId,
    signature: signature,
    api_key: apiKey,
    timestamp: timestamp,
  });
};

