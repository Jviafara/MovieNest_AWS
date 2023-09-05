import privateClient from '../client/privateClient';
import publicClient from '../client/publicClient';

const userEndpoints = {
    signin: 'user/signin',
    signup: 'user/signup',
    getInfo: 'user/info',
    passwordUpdate: 'user/update-password',
};

const userApi = {
    signin: async ({ email, password }) => {
        try {
            const response = await publicClient.post(userEndpoints.signin, {
                email,
                password,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    signup: async ({ email, password, confirmPassword, name }) => {
        try {
            const response = await publicClient.post(userEndpoints.signup, {
                email,
                password,
                confirmPassword,
                name,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    getInfo: async () => {
        try {
            const response = await privateClient.get(userEndpoints.getInfo);
            return { response };
        } catch (err) {
            return { err };
        }
    },
    passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
        try {
            const response = await privateClient.put(
                userEndpoints.passwordUpdate,
                { password, newPassword, confirmNewPassword }
            );
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default userApi;