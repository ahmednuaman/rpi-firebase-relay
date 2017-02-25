#include "application.h"

#if defined(ARDUINO) 
SYSTEM_MODE(SEMI_AUTOMATIC); 
#endif

TCPClient client;

IPAddress server(192, 168, 1, 110);
const int port = 8080;
const int maxTries = 10;

void debug(String msg) {
    Particle.publish("DEBUG", msg);
}

int led1 = D7;

int ledToggle(String command) {
    if (command == "on") {
        digitalWrite(led1, HIGH);
        return 1;
    } else if (command == "off") {
        digitalWrite(led1, LOW);
        return 0;
    } else {
        return -1;
    }
}

void setup() {
   pinMode(led1, OUTPUT);
   Particle.function("led",ledToggle);
   digitalWrite(led1, LOW);
}

void loop() {}
