interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

//接口的继承
interface BatteryWithRadio extends Radio {
    checkBatteryStatus(): void;
}

class CellPhone implements Radio, Battery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() { }
}

class CellPhone2 implements BatteryWithRadio {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() { }
    //implements 之后就可以接继承的 接口
}

class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}