export const useApi = ({ apiUrl}) => {
    const pending = ref(false);
    const error = ref(null);
    const response = ref(null);
    const baseUrl = process.env.API_BASE_URL;

    const request = async (videoUrl) => {
        pending.value = true;
        error.value = null;
        response.value = null;

        try {
            const res = await $fetch(baseUrl + apiUrl, {
                method: 'POST',
                accept: 'application/json',
                body: {
                    url: videoUrl
                }
            });

            response.value = res;
        } catch (err) {
            error.value = err;
        } finally {
            pending.value = false;
        }
    }
    return {
        error, response, pending, request
    }
}