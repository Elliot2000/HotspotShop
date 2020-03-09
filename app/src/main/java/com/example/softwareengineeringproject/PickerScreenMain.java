package com.example.softwareengineeringproject;

import android.app.Dialog;
import android.content.Intent;
import android.os.Bundle;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.tabs.TabLayout;

import androidx.viewpager.widget.ViewPager;
import androidx.appcompat.app.AppCompatActivity;

import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.example.softwareengineeringproject.ui.main.SectionsPagerAdapter;



public class PickerScreenMain extends AppCompatActivity {

    private static final String TAG = "MainActivity"; //Will display where the message has originated in the log
    private static final int ERROR_DIALOG_REQUEST = 4231;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_picker_screen_main);
        SectionsPagerAdapter sectionsPagerAdapter = new SectionsPagerAdapter(this, getSupportFragmentManager());
        ViewPager viewPager = findViewById(R.id.view_pager);
        viewPager.setAdapter(sectionsPagerAdapter);
        TabLayout tabs = findViewById(R.id.tabs);
        tabs.setupWithViewPager(viewPager);

        FloatingActionButton fab = findViewById(R.id.fab);

        //If the services are correct, the map button will open the map activity
        if(correctServices()){
            init();
        }

        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    private void init(){
        FloatingActionButton map = findViewById(R.id.mapButton);
        map.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(PickerScreenMain.this, MapsActivity.class);
                startActivity(intent);
            }
        });

    }

    //Code to check if the user has the right version of google play services to use the map feature
    public boolean correctServices(){
        Log.wtf(TAG, "correctServices: checking for correct services version");

        int available = GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(this);

        if(available == ConnectionResult.SUCCESS){
            //Everything is fine and the user will be able to use the map.
            Log.wtf(TAG, "correctServices: Google play services working.");
            return true;
        }else if(GoogleApiAvailability.getInstance().isUserResolvableError(available)){
            //An error has occurred that the user can resolve.
            Log.wtf(TAG, "correctServices: A user resolvable error has occurred");
            Dialog dialog = GoogleApiAvailability.getInstance().getErrorDialog(PickerScreenMain.this, available, ERROR_DIALOG_REQUEST);
            dialog.show();
        }else{
            //No solution to the problem could be found so the map feature will be unavailable to the user
            Toast.makeText(this, "The map feature is not available on this device", Toast.LENGTH_SHORT).show();
        }
        return false;
    }
}