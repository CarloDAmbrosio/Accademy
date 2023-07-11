public class Main {
  public static void main(String[] args) {

    Veicolo auto =  VeicoloFactory.creaVeicolo("auto");
    auto.accendi();
    auto.spegni();

    Veicolo moto =  VeicoloFactory.creaVeicolo("moto");
    moto.spegni();
    moto.accendi();

  }
}
