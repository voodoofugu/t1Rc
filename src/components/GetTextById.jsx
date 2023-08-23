import AaComponMap from "../components/AaComponMap.jsx";

const GetTextById = (id) => {
    // Предположим, что у вас есть TextArray как в предыдущем коде
    const textItem = AaComponMap.TextMap.find((item) => item.id === id);
    return textItem ? textItem.text : "";
};

export default GetTextById;
