import { bindable, bindingMode, containerless, inject, computedFrom, customElement } from "aurelia-framework"; 
 
@customElement("au-datepicker") 
export class Datepicker{
  // control properties
  @bindable({ defaultBindingMode: bindingMode.twoWay }) label;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) error;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) readOnly;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) options; 
  @bindable({ defaultBindingMode: bindingMode.twoWay }) placeholder;
}
