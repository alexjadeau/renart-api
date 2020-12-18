export default {
  title: "Thèmes",
  name: "theme",
  description: "La liste des thèmes pour les photos.",
  type: "document",
  fields: [
    {
      title: "Nom",
      description: "Le nom du thème.",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.error("Le nom est requis.").required(),
    },
    {
      title: "Description",
      description: "Une description du thème.",
      name: "description",
      type: "string",
    },
    {
      title: "Couleur",
      description: "Une couleur représentant le thème (pour faire jolie sur le site).",
      name: "color",
      type: "color",
    },
  ],
}
