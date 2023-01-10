<?php

namespace App\Http\Controllers;


use App\Http\Resources\LotResource;
use App\Models\Category;
use App\Models\Lot;
use App\Http\Requests\StoreLotRequest;
use App\Http\Requests\UpdateLotRequest;

class LotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return LotResource::collection(Lot::paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLotRequest  $request
     * @return LotResource
     */
    public function store(StoreLotRequest $request)
    {
        $created_lot= Lot::create($request->validated());
        return new LotResource($created_lot);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lot  $lot
     * @return LotResource
     */
    public function show(Lot $lot)
    {
        return new LotResource(Lot::with('category')->findOrFail($lot->id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lot  $lot
     * @return \Illuminate\Http\Response
     */
    public function edit(Lot $lot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLotRequest  $request
     * @param  \App\Models\Lot  $lot

     */


    public function update(UpdateLotRequest $request, Lot $lot)
    {
        $lot->update($request->validated());

        return new LotResource($lot);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lot  $lot
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Lot $lot){

        $lot->delete();

        return response()->json(['message' => 'task was successful']);


    }

}
