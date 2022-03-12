import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      ...S.documentTypeListItems().filter((listItem) => {
        return (
          !["siteSettings"].includes(listItem.getId()) &&
          !["home"].includes(listItem.getId())
        );
      }),
    ]);
