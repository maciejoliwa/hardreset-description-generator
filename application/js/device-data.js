export class DeviceData {
  name = "";
  link = "";
  cpu = "";
  ram = 0;
  spec = "";
  howTosLimit = 0;
  hashtags = "";

  constructor({ device, link, cpu, ram, amount, spec, hashtags }) {
    this.save({ device, link, cpu, ram, amount, spec, hashtags });
  }

  saveButton(button) {
    this.button = button;
  }

  makeActiveForm(form) {
    form[0].value = this.name;
    form[1].value = this.link;
    form[2].value = this.cpu;
    form[3].value = this.ram;
    form[4].value = this.spec;
    form[5].value = this.howTosLimit;
    form[6].value = this.hashtags;
  }

  save({ device, link, cpu, ram, amount, spec, hashtags }) {
    this.name = device;
    this.link = link;
    this.cpu = cpu;
    this.ram = Number.parseInt(ram);
    this.howTosLimit = Number.parseInt(amount);
    this.spec = spec;
    this.hashtags = hashtags;

    if (this.button !== undefined) {
      this.button.textContent = this.name;
    }
  }

  toObject() {
    return {
      device: this.name,
      link: this.link,
      cpu: this.cpu,
      ram: this.ram,
      spec: this.spec,
      amount: this.howTosLimit,
      hashtags: this.hashtags,
    };
  }
}
