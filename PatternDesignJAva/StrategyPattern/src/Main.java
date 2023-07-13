
public class Main {
    public static void main(String[] args) {

        Context context = new Context();

        context.setStrategy(new AddizioneStrategy());
        float risultato =  context.eseguiStrategy(2.2f,2.2f);
        System.out.println("Il risultato dell'addizione è : "+risultato);

        context.setStrategy(new SottrazioneStrategy());
        float sottrazioneResult = context.eseguiStrategy(3.2f, 2.2f);
        System.out.println("Il risultato della sottrazione è : "+sottrazioneResult);


    }
}