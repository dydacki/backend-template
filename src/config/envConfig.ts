import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || ''; //admin
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || ''; //J5wGL8m3LvmbpK25
const MONGO_URL: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@backend-express-cluster.convkvu.mongodb.net/backend-template`;
const SERVER_PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
  smtp: {
    host: 'smtp.ethereal.email',
    port: 587,
    sender: 'noreply@backend-template.com',
    user: 'wlv67bittlpcb6rv@ethereal.email',
    password: 'ZpawtzW1DjmmuTrNHD',
    secure: false,
  },
};
