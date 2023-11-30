import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import {authorize} from 'react-native-app-auth';
const CONFIG: any = {
  issuer:
    'https://ngqanuvancehealth1.b2clogin.com/dc9f88a8-708f-4d92-820c-fa1cac9752b4/v2.0/',
  clientId: '83008f57-6ab1-485c-9fa0-d6d08476b3f2',
  redirectUrl: 'msauth.com.neuroglee.health.qa://auth/',
  additionalParameters: {prompt: 'login'},
  scopes: [
    'https://ngqanuvancehealth1.onmicrosoft.com/f3af5463-88c8-4391-b012-985eb1fb788e/mobileapp',
    'offline_access',
  ],
  dangerouslyAllowInsecureHttpRequests: true,
  authorities: {},
  serviceConfiguration: {
    authorizationEndpoint:
      'https://ngqanuvancehealth1.b2clogin.com/ngqanuvancehealth1.onmicrosoft.com/B2C_1A_SIGINWITHEMAILOTP/oauth2/v2.0/authorize',
    tokenEndpoint:
      'https://ngqanuvancehealth1.b2clogin.com/ngqanuvancehealth1.onmicrosoft.com/B2C_1A_SIGINWITHEMAILOTP/oauth2/v2.0/token',
  },
};

const App = () => {
  const authenticate = useCallback(async () => {
    const authState = await authorize(CONFIG);
    console.log(authState);
  }, []);
  useEffect(() => {
    authenticate();
  }, [authenticate]);
  return <View style={{flex: 1}}></View>;
};

export default App;
