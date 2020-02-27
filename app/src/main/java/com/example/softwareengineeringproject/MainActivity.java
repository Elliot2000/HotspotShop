package com.example.softwareengineeringproject;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.view.View;
import android.widget.Button;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
    private Button startButtonID;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        startButtonID = (Button) findViewById(R.id.startButton);
        startButtonID.setOnClickListener(new View.OnClickListener() {
            @Override
                    public void onClick(View v){
                openActivity2();
            }

        });
    }

    public void openActivity2(){
        Intent intent = new Intent(this, PickerScreenMain.class);
        startActivity(intent);
    }
}
