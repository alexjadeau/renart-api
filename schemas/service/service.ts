export default {
  title: "Prestations",
  description: "La liste des prestations.",
  name: "service",
  type: "document",
  fields: [
    {
      title: "Nom",
      description: "Le nom de la prestation.",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.error("Le nom est requis").required(),
    },
    {
      title: "Description",
      description: "Une courte description pour décrire la prestation.",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.error("La description est requise").required(),
    },
    {
      title: "Prix",
      description: "Le prix de la prestation.",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.error("Le prix est requis").required(),
    },
  ],
}
