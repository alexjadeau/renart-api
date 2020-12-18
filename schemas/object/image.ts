export default {
  title: "Image",
  description: "Une image d'une prestation.",
  name: "mainImage",
  type: "image",
  validation: (Rule) => Rule.error("La photo est obligatoire.").required(),
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Texte alternatif",
      description: "Une description de l'image, ceci est important pour l'accessibilité.",
      name: "alt",
      type: "string",
      validation: (Rule) => Rule.error("Ce champs doit être renseigné (décrire l'image en quelques mots).").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
}
