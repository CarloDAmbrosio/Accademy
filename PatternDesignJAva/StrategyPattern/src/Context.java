public class Context {

    private Strategy strategy;

    public void setStrategy(Strategy strategy){
        this.strategy=strategy;
    }

    public float eseguiStrategy(float a, float b){
        return strategy.operazioni(a,b);
    }

}
