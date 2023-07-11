public class VeicoloFactory {

  public static Veicolo creaVeicolo(String tipo){
    if(tipo.equalsIgnoreCase("auto")){ //Se esiste una classe di tipo AUTO allora crea l'oggetto altrimenti lancia l'errore dicendo che non esiste una classe di quel nome
      return new Auto();
    } else if(tipo.equalsIgnoreCase("moto")){
      return new Moto();
    } else {
      throw  new IllegalArgumentException("Non esiste un veicolo di questo tipo");
    }
  }

}
