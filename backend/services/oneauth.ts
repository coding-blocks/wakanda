import axios, { AxiosInstance } from 'axios';
import config from '../config';

interface IOneauthParams {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URL: string;
}

export interface OneauthUser {
  id: string;
  username: string;
  name: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  photo: string;
  email: string;
  mobile_number: string;
  role: string;
  verifiedemail: string;
  verifiedmobile: string;
}

class OneauthService {
  private params: IOneauthParams;
  private axios: AxiosInstance;

  constructor(URL: string, params: IOneauthParams) {
    this.params = params;

    this.axios = axios.create({
      baseURL: URL,
    });
  }

  async exchangeForAccessToken(grantCode: string): Promise<string> {
    const response = await this.axios.post('/oauth/token', {
      client_id: this.params.CLIENT_ID,
      client_secret: this.params.CLIENT_SECRET,
      redirect_uri: this.params.REDIRECT_URL,
      grant_type: 'authorization_code',
      code: grantCode,
    });

    return response.data.access_token;
  }

  async fetchUser(accessToken: string): Promise<OneauthUser> {
    const response = await this.axios.get('/api/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  }
}

export default new OneauthService(config.ONEAUTH.URL, {
  CLIENT_ID: config.ONEAUTH.CLIENT_ID,
  CLIENT_SECRET: config.ONEAUTH.CLIENT_SECRET,
  REDIRECT_URL: config.ONEAUTH.REDIRECT_URL,
});
