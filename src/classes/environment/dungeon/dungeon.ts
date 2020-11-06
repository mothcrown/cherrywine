import { Environment } from '@/classes/environment/environment'

class Dungeon implements Environment {
    type: string = 'Dungeon'
    size: number

    constructor(size: number) {
        this.size = size
    }

    generate() {
        
    }
}
