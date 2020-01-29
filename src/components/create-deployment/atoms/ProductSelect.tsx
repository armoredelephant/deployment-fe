import React from "react";
import { FieldAttributes, useField } from "formik";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";

/**
 * Custom field for the product select withint the deployment form.
 */

const ProductSelect: React.FC<FieldAttributes<{}>> = ({
  ...props
}: FieldAttributes<{}>) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? "Invalid product." : "";
  const products = ["Computer", "Network Device", "Other", "Phone"];

  return (
    <SpacingWrapper>
      <FormControl>
        <InputLabel id="product">Product</InputLabel>
        <Select
          labelId="product"
          {...field}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: { vertical: "bottom", horizontal: "left" }
          }}
        >
          {products.map((product: string, index: number) => {
            return (
              <MenuItem key={`product-${index}`} value={product}>
                {product}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText error={errorText === "Invalid product."}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </SpacingWrapper>
  );
};

export default ProductSelect;
