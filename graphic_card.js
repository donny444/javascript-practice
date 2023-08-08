class GraphicCard {
    constructor(brand, based, series, vram, coolingSystem, powerConnector, displayOutput, pcb, bios) {
        this.brand = brand;
        this.based = based;
        this.series = series;
        this.vram = vram;
        this.coolingSystem = coolingSystem;
        this.powerConnector = powerConnector;
        this.displayOutput = displayOutput;
        this.pcb = pcb;
        this.bios = bios;
    }
    display() {
        console.log(``);
    }
}

const obj = new GraphicCard(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
const gtx750ti = new GraphicCard("Nvidia", "GeForce", "GTX 750 Ti", "2GB", undefined, "PCIe", "2DVI 1HDMI 1DisplayPort", undefined, undefined);