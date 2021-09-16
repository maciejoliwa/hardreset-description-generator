import { DeviceData } from "./device-data.js";
import { Modal } from "./modal.js";

class Application {
  constructor() {
    this._form = document.querySelector(".description-form");
    this._typeSelection = document.querySelector(".description-type-select");
    this._addDeviceButton = document.querySelector(".add-device");
    this._saveButton = document.querySelector(".save");
    this._descriptionType = "game";
    this._devicesElements = document.querySelector(".devices");
    this._devices = [];
    this._activeDevice = null;

    this._formData = new FormData(this._form);

    this._typeSelection.addEventListener("change", () =>
      this.switchDescriptionType()
    );
    this._addDeviceButton.addEventListener("click", () => this.addNewDevice());
    this._saveButton.addEventListener("click", () =>
      this.saveFormDataToActiveDevice()
    );
    this._form.addEventListener("submit", (e) => this.submit(e));
  }

  switchDescriptionType() {
    this._descriptionType = this._typeSelection.value;
    switch (this._descriptionType) {
      case "game":
        this._addDeviceButton.style.display = "none";
        this._devicesElements.style.display = "none";
        this._saveButton.style.display = "none";
        break;
      case "benchmark":
        this._addDeviceButton.style.display = "block";
        this._devicesElements.style.display = "block";
        this._saveButton.style.display = "block";
        break;
      default:
        break;
    }
  }

  saveFormDataToActiveDevice() {
    if (this._activeDevice === null) {
      Modal.display("No active device chosen.");
      return;
    }

    const data = new FormData(this._form);
    const parsedData = Object.fromEntries(data.entries());

    this._activeDevice.save(parsedData);
  }

  addNewDevice() {
    if (this._devices.length == 2) {
      Modal.display(
        "Aplikacja narazie wspiera tylko dwa telefony do benchmarku"
      );
      return;
    }

    const data = new FormData(this._form);
    const parsedData = Object.fromEntries(data.entries());
    const deviceName = parsedData["device"];

    if (deviceName === "") {
      Modal.display("Aby dodać nowe urządzenie, wymagane jest podanie nazwy.");
      return;
    }

    const newDevice = new DeviceData(parsedData);
    this._devices.push(newDevice);

    const newDeviceButtonSwitcher = document.createElement("button");
    newDeviceButtonSwitcher.textContent = deviceName;
    newDeviceButtonSwitcher.className = "device-button";

    newDeviceButtonSwitcher.addEventListener("click", () => {
      document
        .querySelectorAll(".device-button")
        .forEach((butt) => butt.classList.remove("active"));

      newDevice.makeActiveForm(this._form);
      newDeviceButtonSwitcher.classList.add("active");
      this._activeDevice = newDevice;
    });

    newDeviceButtonSwitcher.addEventListener("contextmenu", () => {
      newDeviceButtonSwitcher.remove();
      this._devices = this._devices.filter((dev) => dev.name !== deviceName);
    });

    this._devicesElements.appendChild(newDeviceButtonSwitcher);
    newDevice.saveButton(newDeviceButtonSwitcher);

    this._form[0].value = null;
    this._form[1].value = null;
    this._form[2].value = null;
    this._form[3].value = null;
    this._form[4].value = null;
    this._form[5].value = 5;
    this._form[6].value = null;
  }

  submit(e) {
    e.preventDefault();
    if (this._descriptionType == "game") {
      const formData = new FormData(this._form);
      const parsedData = Object.fromEntries(formData.entries());
      const dev = new DeviceData(parsedData);

      const data = {
        descriptionType: this._descriptionType,
        devices: JSON.stringify([dev.toObject()]),
      };

      window.electron
        .getDb(this._descriptionType)
        .then(([games, sentences, titles, howtos, tags]) => {
          window.electron.saveDesc(
            gen.core.generate(
              this._descriptionType,
              data.devices,
              sentences.map((d) => d.content),
              titles.map((d) => d.content),
              howtos.map((d) => d.content),
              games.map((d) => d.content),
              [],
              [],
              tags.map(d => d.content)
            )
          );
        });
    } else if (this._descriptionType == "benchmark") {
      const formData = new FormData(this._form);
      const parsedData = Object.fromEntries(formData.entries());
      const dev = new DeviceData(parsedData);

      if (this._devices.length > 1) {
        window.electron
          .getDb("versus")
          .then(([benchmarks, sentences, titles, howtos, points, tags]) => {
            window.electron.saveDesc(
              gen.core.generate(
                "versus",
                JSON.stringify(this._devices.map((d) => d.toObject())),
                sentences.map((d) => d.content),
                titles.map((d) => d.content),
                howtos.map((d) => d.content),
                [],
                benchmarks.map((d) => d.content),
                points.map((d) => d.content),
                tags.map(d => d.content)
              )
            );
          });
        return;
      }

      window.electron
        .getDb(this._descriptionType)
        .then(([benchmarks, sentences, titles, howtos, points, tags]) => {
          window.electron.saveDesc(
            gen.core.generate(
              this._descriptionType,
              JSON.stringify([dev.toObject()]),
              sentences.map((d) => d.content),
              titles.map((d) => d.content),
              howtos.map((d) => d.content),
              [],
              benchmarks.map((d) => d.content),
              points.map((d) => d.content),
              tags.map(d => d.content)
            )
          );
        });
    }
  }
}

new Application();
