Page(Object.assign({}, {
  data: {
    stepper1: {
      stepper: 10,
      min: 1,
      max: 20,
      understock:true
    },
    stepper2: {
      stepper: 10,
      min: 1,
      max: 20,
      understock: true
    },
    stepper3: {
      stepper: 10,
      min: 1,
      max: 20,
      step: 2,
      understock: false
    }
  },

  handleZanStepperChange({
    detail: stepper,
    target: {
      dataset: {
        componentId
      }
    }
  }) {
    this.setData({
      [`${componentId}.stepper`]: stepper
    });
  }
}));
