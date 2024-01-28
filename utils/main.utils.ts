export const isEmpty = (value: string | object | null | undefined) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

// cut text to 100 characters and add "..." at the end
export const cutText = (text: string) => {
  return text.length > 80 ? text.slice(0, 80) + "..." : text;
};

