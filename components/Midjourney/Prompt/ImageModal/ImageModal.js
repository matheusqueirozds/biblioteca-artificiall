import React, { useEffect } from "react";
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

	// Função para lidar com o evento de pressionar uma tecla
	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	// Adiciona e remove o event listener ao montar e desmontar o componente
	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		} else {
			window.removeEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, handleKeyDown]);

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
