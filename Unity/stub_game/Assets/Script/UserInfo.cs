

using System.Numerics;

public class UserInfo 
{
    public string gameId;
    public string userName;
    public BigInteger InGameMoney;
    public BigInteger Stone;

    public UserInfo(string gameId, string userName, BigInteger InGameMoney, BigInteger Stone)
    {
        this.gameId = gameId;
        this.userName = userName;
        this.InGameMoney = InGameMoney;
        this.Stone = Stone;
    }




    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
