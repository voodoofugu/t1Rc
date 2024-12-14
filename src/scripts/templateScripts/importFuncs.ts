type importT = {
  fileName: string;
};

const importPage = async ({ fileName }: importT) => {
  const data = await import(
    `@/src/components/projetComponents/pagesComponents/${fileName}`
  );
  return data;
};

const importPopup = async ({ fileName }: importT) => {
  const data = await import(
    `@/src/components/projetComponents/popupsContetnt/${fileName}`
  );
  return data;
};

export { importPage, importPopup };
