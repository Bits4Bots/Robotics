// main.ts
// MakeCode extension for Bits4Bots Robot Kit

//% color=#3af0e7 icon="\uf085" block="Bits4Bots Robot Kit"
namespace Bits4BotsRobotKit {

    // ----------------- DC MOTOR -----------------
    export enum MotorDirection {
        //% block="forward"
        Forward = 0,
        //% block="backward"
        Backward = 1
    }

    //% blockId=bits4bots_setMotor
    //% block="set motor at pin %pin | direction %dir | speed %speed"
    //% speed.min=0 speed.max=255
    export function setMotor(pin: AnalogPin, dir: MotorDirection, speed: number): void {
        if (dir == MotorDirection.Forward) {
            pins.analogWritePin(pin, speed)
        } else {
            pins.analogWritePin(pin, 1023 - speed)
        }
    }

    // ----------------- SERVO -----------------
    //% blockId=bits4bots_setServo
    //% block="set servo at pin %pin | to %angle °"
    //% angle.min=0 angle.max=180
    export function setServo(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }

    // ----------------- ULTRASONIC -----------------
    //% blockId=bits4bots_ultrasonic
    //% block="ultrasonic trig %trig | echo %echo (cm)"
    export function ultrasonic(trig: DigitalPin, echo: DigitalPin): number {
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        let d = pins.pulseIn(echo, PulseValue.High, 25000)
        return Math.idiv(d, 58)
    }

    // ----------------- WATER LEVEL -----------------
    //% blockId=bits4bots_waterLevel
    //% block="water level sensor at pin %pin"
    export function waterLevel(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    // ----------------- TEMPERATURE -----------------
    //% blockId=bits4bots_temperature
    //% block="temperature sensor at pin %pin (°C)"
    export function temperature(pin: AnalogPin): number {
        let v = pins.analogReadPin(pin) * 3.3 / 1023
        return Math.round((v - 0.5) * 100)
    }

    // ----------------- BUZZER -----------------
    //% blockId=bits4bots_buzzer
    //% block="buzzer at pin %pin | freq %freq Hz | for %ms ms"
    export function buzzer(pin: AnalogPin, freq: number, ms: number): void {
        pins.analogSetPitchPin(pin)
        music.playTone(freq, ms)
    }

    // ----------------- LED -----------------
    //% blockId=bits4bots_led
    //% block="set LED at pin %pin | %on"
    export function led(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    // ----------------- HALL EFFECT SENSOR -----------------
    //% blockId=bits4bots_hallSensor
    //% block="hall effect sensor at pin %pin"
    export function hallSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }
}

