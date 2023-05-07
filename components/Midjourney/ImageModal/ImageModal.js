import React from "react";
import {
	CloseButton,
	Image,
	ModalContent,
	ModalOverlay,
} from "./ImageModalStyles";

// Componente para exibir uma imagem em um modal
const ImageModal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
	// Caso o modal não esteja aberto, não renderiza o componente
	if (!isOpen) {
		return null;
	}

	return (
		<ModalOverlay
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-labelledby="image-modal-title"
		>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<h2 id="image-modal-title" style={{ display: "none" }}>
					Visualização de imagem
				</h2>
				<CloseButton onClick={onClose} aria-label="Fechar">
					&times;
				</CloseButton>
				<Image src={imageUrl} alt={imageAlt} />
			</ModalContent>
		</ModalOverlay>
	);
};

export default ImageModal;
