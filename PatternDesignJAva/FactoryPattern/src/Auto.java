public class Auto implements Veicolo{
  @Override
  public void accendi() {
    System.out.println("La macchina si è accesa");
  }

  @Override
  public void spegni() {
  System.out.println("La macchina si è spenta ");
  }
}
