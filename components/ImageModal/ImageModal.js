import React from "react";
import {
	CloseButton,
	Image,
	ModalContent,
	ModalOverlay,
} from "./ImageModalStyles";

const ImageModal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				<Image src={imageUrl} alt={imageAlt} />
			</ModalContent>
		</ModalOverlay>
	);
};

export default ImageModal;
