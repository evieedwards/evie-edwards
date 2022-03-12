export default {
  name: "siteSettings",
  title: "Site Settings",
  __experimental_actions: [/*"create",*/ "update", /*'delete',*/ "publish"],
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "og_image",
      title: "Social card (1200×630)",
      type: "image",
    },
    {
      name: "favicon",
      title: "Favicon (32x32)",
      type: "image",
    },
  ],
};
