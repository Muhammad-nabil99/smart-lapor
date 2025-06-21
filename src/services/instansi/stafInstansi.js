import axios from "axios";

export const getStafInstansi = async token => {
    const hasil = await axios.get("http://localhost:3000/api/instansi/staf", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return hasil.data;
};
export const addStafInstansi = async (data) => {
    const hasil = await axios.post("http://localhost:3000/api/staf/tambah", data.data, {
        headers: {
            Authorization: `Bearer ${data.token}`,
        },
    });
    return hasil.data;
};

export const deleteStafInstansi = async (data) => {
    const hasil = await axios.delete("http://localhost:3000/api/staf/" + data.id, {
        headers: {
            Authorization: `Bearer ${data.token}`,
        },
    });
    return hasil.data;
}
