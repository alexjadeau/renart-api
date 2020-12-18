export default {
  title: "Photo",
  name: "Photo",
  description: "La liste des photos pour la galerie.",
  type: "document",
  fields: [
    {
      title: "Image",
      description: "L'image principale.",
      name: "mainImage",
      type: "mainImage",
      validation: (Rule) => Rule.error("Une photo doit être présente.").required(),
    },
    {
      title: "Description",
      description: "Un descriptif bref de la prestation que l'on voit sur cette photo.",
      name: "description",
      type: "string",
    },
    {
      title: "Date",
      name: "releaseDate",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Aujourd'hui",
      },
    },
    {
      title: "Thèmes",
      description: "Le ou les thème(s) associé(s) à cette photo.",
      name: "themes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "theme" }],
        },
      ],
    },
  ],
}
