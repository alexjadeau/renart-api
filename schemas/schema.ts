import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import image from "./object/image"
import photo from "./photo/photo"
import theme from "./photo/theme"
import category from "./service/category"
import service from "./service/service"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([image, photo, theme, category, service]),
})
