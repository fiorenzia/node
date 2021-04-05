using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyPageButton : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void Drop()
    {
        // TODO クリック時にボタン縮小
        Vector3 nowVec = new Vector3();
        nowVec.x = this.transform.localScale.x;
        nowVec.y = this.transform.localScale.y;
        nowVec.z = this.transform.localScale.z;
        Vector3 changeVec = new Vector3(nowVec.x,nowVec.y,nowVec.z);
        this.transform.localScale = nowVec*0.0001f;
    }

}
