/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    const photo = photoResponse.body;
    const { firstName, lastName } = userResponse;

    console.log(`${photo} ${firstName} ${lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
