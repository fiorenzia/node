using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager singleton;

    private static string GAME_ID;
    private static string USER_NAME;
    private static BigInteger INGAME_MONEY;
    private static BigInteger STONE;

    public void setGameId(string gameId) {
        GAME_ID = gameId;
    }
    public void setUserName(string userName)
    {
        USER_NAME = userName;
    }
    public void setIngameMoney(BigInteger IngameMoney)
    {
        INGAME_MONEY = IngameMoney;
    }
    public void setStone(BigInteger Stone)
    {
        STONE = Stone;
    }

    public string getGameId()
    {
        return GAME_ID;
    }
    public string getUserName()
    {
        return USER_NAME;
    }
    public BigInteger getIngameMoney()
    {
        return INGAME_MONEY;
    }
    public BigInteger getStone()
    {
        return STONE;
    }

    void Awake()
    {
        //　スクリプトが設定されていなければゲームオブジェクトを残しつつスクリプトを設定
        if (singleton == null)
        {
            DontDestroyOnLoad(gameObject);
            singleton = this;
            //　既にGameStartスクリプトがあればこのシーンの同じゲームオブジェクトを削除
        }
        else
        {
            Destroy(gameObject);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
