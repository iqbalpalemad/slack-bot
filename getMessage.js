module.exports = (message) => {
    const text = message.split(">");
    return text[1].trim();
}