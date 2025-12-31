import { Room, Category } from "@/types/room";

import {
    MOCK_ROOMS,
    MOCK_CATEGORIES,
    MOCK_PREBUILT_DESIGNS,
    MOCK_TIPS
} from "@/lib/data";

const SIMULATED_DELAY = 800; // 800ms de latencia simulada

/**
 * Obtiene la lista de todos los espacios disponibles.
 */
export const getAllRooms = async (): Promise<Room[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_ROOMS;
};

/**
 * Obtiene los detalles de un espacio por su ID (slug).
 */
export const getRoomById = async (id: string): Promise<Room | undefined> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_ROOMS.find((room) => room.id === id);
};

/**
 * Obtiene las categorías asociadas a un espacio.
 */
export const getCategoriesByRoom = async (roomId: string): Promise<Category[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_CATEGORIES.filter((category) => category.roomId === roomId);
};

/**
 * Obtiene los diseños preconfigurados para un espacio.
 */
export const getDesignsByRoom = async (roomId: string) => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_PREBUILT_DESIGNS.filter((design) => design.roomId === roomId);
};

/**
 * Obtiene los tips/consejos para un espacio.
 */
export const getTipsByRoom = async (roomId: string) => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_TIPS.filter((tip) => tip.roomId === roomId);
};
