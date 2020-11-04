using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MypageManager : MonoBehaviour
{
    public GameManager gameManager;
    public string userName;
    // Start is called before the first frame update
    void Start()
    {
        gameManager = new GameManager();
        userName = gameManager.getGameId();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log(userName);
        }
    }
}
