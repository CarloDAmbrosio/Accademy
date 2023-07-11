public class Moto implements Veicolo{


  @Override
  public void accendi() {
  System.out.println("La moto si è accesa");
  }

  @Override
  public void spegni() {
    System.out.println("La moto si è spenta");
  }
}
