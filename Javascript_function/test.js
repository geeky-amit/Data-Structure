class BPReport {
  systolic;
  distolic;
  constructor(systolic, distolic) {
    this.systolic = systolic;
    this.distolic = distolic;
  }
  genrateReport() {
    if (this.systolic > 140 || this.distolic > 120) {
      console.log("your blood presure is ", this.systolic, "/", this.distolic);
      console.log("Diagnosis : High BP");
    } else if (this.systolic < 90 || this.distolic < 60) {
      console.log("your blood presure is ", this.systolic, "/", this.distolic);
      console.log("Diagnosis : Low BP");
    } else {
      console.log("your blood presure is ", this.systolic, "/", this.distolic);
      console.log("Diagnosis : Normal BP");
    }
  }
}
