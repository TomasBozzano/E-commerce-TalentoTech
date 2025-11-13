import { useEffect, useState } from "react";
import { ButtonDefault } from "../../../../components/ButtonDefault";
import { InputLabel } from "../../../../components/InputLabel";
import { InputTextarea } from "../../../../components/InputTextarea";
import { Modal } from "../../../../components/Modal"
import { useProduct } from "../../../../hooks/useProduct";
import { toast, ToastContainer } from "react-toastify";
import { updateProduct } from "../../../../services/products.service";

export const ModalUpdateProduct = ({ isClosed, isOpen, product, onSaved }) => {

  if (!isOpen) return null;

  const stateProduct = useProduct(product);

  const handleSave = async () => {
    const valid = stateProduct.validateFields();
    const validNumbers = stateProduct.validateNumberFields();

    if (!valid || !validNumbers) return;

    const priceNum = stateProduct.changeNumberFields(stateProduct.price);
    const stockNum = stateProduct.changeNumberFields(stateProduct.stock);

    try {
      const productUpdated = {
        nombre: stateProduct.name,
        descripcion: stateProduct.description,
        precio: stateProduct.addComNumber(priceNum),
        categoria: stateProduct.category,
        stock: stockNum,
        avatar: stateProduct.avatar
      };
      await updateProduct(product.id, productUpdated);
      toast.success("Producto actualizado");
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el producto");
    } finally {
      setTimeout(() => {
        onSaved();
        isClosed();
      }, 2500);

    }
  }

  return (
    <Modal isClosed={isClosed}>
      <h2 className="text-center font-bold">Actualizar Producto</h2>

      <InputLabel
        type={"text"}
        name="Nombre"
        value={stateProduct.name}
        className={`w-full ${stateProduct.errors?.name ? "border border-red-500" : ""}`}
        disabled={false}
        onChange={stateProduct.writtenName}
      />
      {stateProduct.errors?.name && <p className="text-red-500 text-sm mt-1">{stateProduct.errors.name}</p>}

      <InputLabel
        type={"text"}
        name="Precio"
        value={stateProduct.price}
        className={`w-full ${stateProduct.errors?.price ? "border border-red-500" : ""}`}
        disabled={false}
        onChange={stateProduct.writtenPrice}
      />
      {stateProduct.errors?.price && <p className="text-red-500 text-sm mt-1">{stateProduct.errors.price}</p>}

      <InputLabel
        type={"text"}
        name="Categoría"
        value={stateProduct.category}
        className={`w-full ${stateProduct.errors?.category ? "border border-red-500" : ""}`}
        disabled={false}
        onChange={stateProduct.writtenCategory}
      />
      {stateProduct.errors?.category && <p className="text-red-500 text-sm mt-1">{stateProduct.errors.category}</p>}

      <InputLabel
        type={"text"}
        name="Stock"
        value={stateProduct.stock}
        className={`w-full ${stateProduct.errors?.stock ? "border border-red-500" : ""}`}
        disabled={false}
        onChange={stateProduct.writtenStock}
      />
      {stateProduct.errors?.stock && <p className="text-red-500 text-sm mt-1">{stateProduct.errors.stock}</p>}

      <InputLabel
        type={"text"}
        name="Imagen"
        value={stateProduct.avatar}
        className={`w-full ${stateProduct.errors?.avatar ? "border border-red-500" : ""}`}
        disabled={false}
        onChange={stateProduct.writtenAvatar}
      />
      {stateProduct.errors?.avatar && <p className="text-red-500 text-sm mt-1">{stateProduct.errors.avatar}</p>}

      <InputTextarea
        name="Descripción"
        maxLength={200}
        value={stateProduct.description}
        onChange={stateProduct.writtedDescription}
        className={`w-full ${stateProduct.errors?.description ? "border border-red-500" : ""}`}
      />
      {stateProduct.errors?.description && <p className="text-red-500 text-sm mt-1">{stateProduct.errors.description}</p>}

      <div className="mt-4 flex justify-end">
        <ButtonDefault className="bg-red-600 p-2 rounded hover:bg-red-500 text-white" onClick={isClosed} name="Cancelar" />
        <ButtonDefault className="bg-blue-600 rounded hover:bg-blue-500 p-2 text-white" onClick={handleSave} name="Guardar" />
      </div>
      <ToastContainer />
    </Modal>
  )
}
