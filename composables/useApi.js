import axios from "axios";

export const useApi = ({ apiUrl }) => {
    const pending = ref(false);
    const error = ref(null);
    const response = ref(null);
    const baseUrl = `${process.env.API_BASE_URL}${apiUrl}`;

    const request = async (videoUrl) => {
        pending.value = true;
        error.value = null;
        response.value = null;
        const body = new URLSearchParams({
            url: videoUrl,
        }).toString();

        try {
            const res = await axios.post(
                baseUrl,
                body,
                {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            response.value = res.data;
        } catch (err) {
            console.error(
                err.response?.data?.message?.errors?.url || "Unknown error"
            );
            error.value = err.response?.data?.message || "Error";
        } finally {
            pending.value = false;
        }
    };
    return {
        error,
        response,
        pending,
        request,
    };
};
