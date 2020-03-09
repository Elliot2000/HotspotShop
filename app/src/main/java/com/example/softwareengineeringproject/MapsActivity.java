package com.example.softwareengineeringproject;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.FragmentActivity;

import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.nfc.Tag;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MapStyleOptions;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    // List of shops in format: Name/Lat/Long
    private static final String[][] shops = {{"Morrisons", "53.224429", "-0.554465"},{"1", "1", "1"}};

    private GoogleMap mMap;
    private FusedLocationProviderClient fusedLocationProviderClient;
    private static final String TAG = "MapsActivity"; //Will display where the message has originated in the log
    private static final int Location_Permission_RequestCode = 1234;
    private static final float defaultZoom = 13f;
    private boolean locationPermissions = false;
    private static final String fineLocation = Manifest.permission.ACCESS_FINE_LOCATION;
    private static final String coarseLocation = Manifest.permission.ACCESS_COARSE_LOCATION;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);

        getLocationPermissions();
    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        Toast.makeText(this, "Map is ready", Toast.LENGTH_SHORT).show();
        Log.wtf(TAG, "onMapReady: map is ready to use");
        mMap = googleMap;
        googleMap.setMapStyle(new MapStyleOptions(getResources()
                .getString(R.string.style_json)));


        mMap.addMarker(new MarkerOptions().position(new LatLng(Float.parseFloat(shops[0][1]), Float.parseFloat(shops[0][2]))).title(shops[0][0]));



        if(locationPermissions){
            getDeviceLocation();
            if(ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED){
                return;
            }
            mMap.setMyLocationEnabled(true);
            mMap.getUiSettings().setMyLocationButtonEnabled(false);
        }
    }

    private void initMap(){
        Log.wtf(TAG, "initMap: Initialising map");

        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(MapsActivity.this);
    }



    //Will get the users permission to use location services
    private void getLocationPermissions(){
        Log.wtf(TAG, "getLocationPermissions: Getting user location permissions");
        String[] permissions = {fineLocation, coarseLocation};

        if(ContextCompat.checkSelfPermission(this.getApplicationContext(), fineLocation) == PackageManager.PERMISSION_GRANTED){
            if(ContextCompat.checkSelfPermission(this.getApplicationContext(), coarseLocation) == PackageManager.PERMISSION_GRANTED){
                locationPermissions = true;
                initMap();
            }else{
                ActivityCompat.requestPermissions(this, permissions, Location_Permission_RequestCode);
            }
        }else{
            ActivityCompat.requestPermissions(this, permissions, Location_Permission_RequestCode);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        Log.wtf(TAG, "onRequestPermissionResults: Called");
        locationPermissions = false;
        switch(requestCode){
            case Location_Permission_RequestCode:{
                if(grantResults.length > 0){
                    for(int i = 0; i < grantResults.length; i++) {
                        if (grantResults[i] != PackageManager.PERMISSION_GRANTED) {
                            locationPermissions = false;
                            Log.wtf(TAG, "onRequestPermissionResult: Permission Denied");
                            return;
                        }
                    }
                    locationPermissions = true;
                    Log.wtf(TAG, "onRequestPermissionResult: Permission Granted");
                    initMap();
                }
            }
        }
    }

    private void getDeviceLocation(){
        Log.wtf(TAG, "getDeviceLocation: Getting device location");

        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);

        try{
            if(locationPermissions){
                Task<Location> location = fusedLocationProviderClient.getLastLocation();
                location.addOnCompleteListener(new OnCompleteListener<Location>() {
                    @Override
                    public void onComplete(@NonNull Task<Location> task) {
                        if(task.isSuccessful()){
                            Log.wtf(TAG, "onComplete: Location Found");
                            Location currentLocation = (Location) task.getResult();

                            moveCamera(new LatLng(currentLocation.getLatitude(), currentLocation.getLongitude()), defaultZoom);
                        }
                        else{
                            Log.wtf(TAG, "onComplete: Location not found");
                            Toast.makeText(MapsActivity.this, "Location not found", Toast.LENGTH_SHORT).show();
                        }
                    }
                });
            }
        }catch(SecurityException e){
            Log.e(TAG, "getDeviceLocation: Security Exception: " + e.getMessage());
        }
    }

    private void moveCamera(LatLng latLng, float zoom){
        Log.wtf(TAG, "moveCamera: Moving the camera to Lat: " + latLng.latitude + " Long: " + latLng.longitude);
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(latLng, zoom));
    }
}
