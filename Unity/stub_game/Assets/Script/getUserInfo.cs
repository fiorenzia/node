﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.U2D.Animation;
using UnityEngine.UIElements;
using UnityEngine.Networking;
using UnityEngine.SceneManagement;
using UniRx;

public class GetUserInfo : MonoBehaviour
{
    GameManager gameManager;
    private string URL = "http://localhost:3000/users/getUserInfo";
    private const string separate = "?";
    private const string paramName = "gameId";
    private const string equal = "=";
    private bool isConnectSuccess = true;
    // Start is called before the first frame update
    void Start()
    {
        gameManager = new GameManager();
    }

    // Update is called once per frame
    async void Update()
    {
        // ひとまず入力の検知
        if (Input.GetMouseButtonDown(0))
        {
            await StartCoroutine("OnSend", makeUrl());
            Debug.Log(gameManager.getGameId());
            if (isConnectSuccess)
            {
                SceneManager.LoadScene("Mypage");
            } else {
                // 今のところなし  
                Debug.Log("failed");
            }
        }
    }

    String makeUrl()
    {
        string url = URL + separate + paramName + equal + fileOpen();
        return url;
    }

    // 外部ファイル読み込み
    String fileOpen()
    {
        String gameId = "";
        FileInfo file = new FileInfo(Application.dataPath + "/file/game_id");
        // fileの存在確認後、未存在の場合は初回ユーザ登録へ遷移させる。
        try
        {
            using (StreamReader sr = new StreamReader(file.OpenRead()))
            {
                gameId = sr.ReadToEnd();
                sr.Close();
            }
        }
        catch
        {
            // ひとまずなし
        }
        finally
        {
            // 後で考える
        }
        return gameId;
    }

    //コルーチン
    IEnumerator OnSend(string url)
    {
        //URLをGETで用意
        UnityWebRequest webRequest = UnityWebRequest.Get(url);
        //URLに接続して結果が戻ってくるまで待機
        yield return webRequest.SendWebRequest();

        //エラーが出ていないかチェック
        if (webRequest.isNetworkError)
        {
            //通信失敗
            Debug.Log(webRequest.error);
            isConnectSuccess = false;
        }
        else
        {
            //通信成功
            Debug.Log(webRequest.downloadHandler.text);
            UserInfo userInfo = JsonUtility.FromJson<UserInfo>(webRequest.downloadHandler.text);
            gameManager.setGameId(userInfo.gameId);
            gameManager.setUserName(userInfo.userName);
            gameManager.setIngameMoney(userInfo.InGameMoney);
            gameManager.setStone(userInfo.Stone);
            Debug.Log(gameManager.getGameId());
        }
    }
}



