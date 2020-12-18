export default {
  title: "Catégorie prestations",
  description: "La liste des catégories de prestations.",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Nom",
      description: "Le nom de la catégorie.",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.error("Le nom est requis").required(),
    },
    {
      title: "Description",
      description: "Une description de la catégorie.",
      name: "description",
      type: "string",
    },
    {
      title: "Prestations",
      description: "Les prestations associées à cette catégorie.",
      name: "services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    },
  ],
}
