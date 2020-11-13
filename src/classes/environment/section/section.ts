import * as THREE from 'three'

export type Position = {
    x: number
    y: number
    z: number
}

class SectionService {
    generate(scale: number, walls: Array<Boolean>) {
        let geometry = new THREE.BoxGeometry(scale, scale, scale)


    }
}

export class Section {
    private type: string
    private scale: number
    walls: Array<Boolean>

    constructor(type: string, scale: number, walls: Array<Boolean>, position: Position) {
        this.type = type
        this.scale = scale
        this.walls = walls
    }
}
